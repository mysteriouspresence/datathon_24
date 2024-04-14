use calamine::*;
use std::collections::HashMap;
use std::fs::File;
use std::io::Write;

#[derive(Debug, Clone)]
struct Node {
    part: String,
    parent: String,
    variant: String,
    is_error: bool,
    is_affected: bool,
    path: String,
}
impl Node {
    fn set_to_affected(&mut self) {
        self.is_affected = true;
    }
}

struct Assembly {
    parts: HashMap<String, (u8, Node)>,
}
impl Assembly {
    fn set_to_affected(&mut self, target: String) {
        for (_, n) in self.parts.iter_mut() {
            //println!("part{} and target {}", n.part, target);
            if n.1.part == target {
                n.1.set_to_affected();
            }
        }
    }
}
const PATH: &str = "C:\\Users\\bookw\\Downloads\\QRV Bill of Materials.xlsx";
fn main() -> Result<(), Error> {
    let mut workbook: Xlsx<_> = open_workbook(PATH)?;
    let range = workbook.worksheet_range("raw")?;

    let results: HashMap<String, (u8,Node)> = RangeDeserializerBuilder::new()
        .from_range(&range)?
        .map(|row| {
            let (level, path, _, _, part, _, parent, _, _, _, variant, is_error): (
                u8,
                String,
                String,
                String,
                String,
                String,
                String,
                String,
                String,
                String,
                String,
                bool,
            ) = row.unwrap_or_default();
            (
                part.clone(),
                (level,
                Node {
                    part,
                    parent,
                    variant,
                    is_error,
                    is_affected: false,
                    path,
                })
            )
        })
        .collect();
    //println!("aa {:?}", results);
    let node_parser = results.clone();
    let mut results = Assembly { parts: results };
    let mut count = 0;
    for node in node_parser {
        let path_nodes: Vec<String> = node.1.1.path.split("-").map(|x| x.to_string()).collect();
        if node.1.1.is_error {
            for id in path_nodes.clone() {
                results.set_to_affected(id);
            }
        }
        count = count + 1;
    }
    println!("{:?}", results.parts);

    let clean: Vec<(u8, String, String, String, bool, bool)> = results.parts.into_iter().map(|(_, (level, node))| (level, node.variant, node.part, node.parent, node.is_error,node.is_affected)).collect();
    let text = clean.iter().map(|c| format!("{}, {}, {}, {}, {}. {}\n", c.0, c.1, c.2, c.3, c.4, c.5)).collect::<String>();
    let mut output = File::create("values.csv")?;
    write!(output, "{}", text).expect("file dne");

    
    Ok(())
}
