use calamine::*;
//use std::collections::HashMap;
use std::fs::File;
use std::io::Write;

#[derive(Debug, Clone)]
struct Node {
    part: String,
    parent: String,
    person: String,
    system: String,
    subsystem: String,
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
    parts: Vec<(String, Node)>,
}
impl Assembly {
    fn set_to_affected(&mut self, target: String) {
        for (_, n) in self.parts.iter_mut() {
            //println!("part{} and target {}", n.part, target);
            if n.part == target {
                n.set_to_affected();
            }
        }
    }
}
const PATH: &str = "C:\\Users\\bookw\\Downloads\\QRV Bill of Materials.xlsx";
fn main() -> Result<(), Error> {
    let mut workbook: Xlsx<_> = open_workbook(PATH)?;
    let range = workbook.worksheet_range("raw")?;

    let results: Vec<(String, Node)> = RangeDeserializerBuilder::new()
        .from_range(&range)?
        .map(|row| {
            let (_, path, system, subsystem, part, _, parent, person, _, _, variant, is_error): (
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
                String,
                bool,
            ) = row.unwrap_or_default();
            (
                part.clone(),
                Node {
                    part,
                    parent,
                    person, 
                    system,
                    subsystem,
                    variant,
                    is_error,
                    is_affected: false,
                    path,
                }
            )
        })
        .collect();
    //println!("aa {:?}", results);
    let node_parser = results.clone();
    let mut results = Assembly { parts: results };
    let mut count = 0;
    for node in node_parser {
        let path_nodes: Vec<String> = node.1.path.split("-").map(|x| x.to_string()).collect();
        if node.1.is_error {
            let mut count_to_last = path_nodes.len();
            for id in path_nodes.clone() {
                if count_to_last > 1 {
                results.set_to_affected(id);
                }
                count_to_last = count_to_last - 1;
            }
        }
        count = count + 1;
    }
    println!("{:?}", results.parts);

    let clean: Vec<(String, String, String, String, String, String, bool, bool)> = results.parts.into_iter().map(|(_,  node)| (node.variant, node.part, node.parent,node.person, node.system, node.subsystem, node.is_error,node.is_affected)).collect();
    let text = clean.iter().map(|c| format!("{}, {}, {}, {}, {}, {}, {}, {}\n", c.0, c.1, c.2, c.3, c.4, c.5, c.6, c.7)).collect::<String>();
    let mut output = File::create("values1.csv")?;
    write!(output, "{}", text).expect("file dne");
    
    Ok(())
}
