use calamine::*;
use substring::*;
#[derive(Debug, Clone)]
struct Node {
    level: u8,
    part: String,
    variant: String,
    is_error: bool,
    is_affected :bool,
    path: String
}
impl Node {
    fn set_to_affected (&mut self) {
        self.is_affected = true;
    }
}

struct Assembly {
    parts: Vec<Node>
}
impl Assembly {
    fn set_parent_to_affected (&mut self, target: String) {
        let _ = self.parts.iter_mut().filter(|n| n.part == target).map(|mut n| n.set_to_affected());
    }

    fn set_path_to_affected (&mut self, target: String) {
        let _ = self.parts.iter_mut().filter(|n| n.path.substring(0,(n.level*10+n.level).into()).contains(&target));
    }
}
const PATH: &str = "C:\\Users\\bookw\\Downloads\\QRV Bill of Materials.xlsx";
fn main() -> Result<(), Error> {
    let mut workbook: Xlsx<_> = open_workbook(PATH)?;
    let range = workbook.worksheet_range("raw")?;
    //let mut results:Vec<Node> = Vec::new();

    //let mut iter: RangeDeserializer<'_, Data, (_, _, _, _, std::string::String, _, std::string::String, _, _, _, std::string::String, bool)>
    //= ;

    //while let Some(result) = iter.next() {
    //  let (_,_,_,_,part,_,parent,_,_,_,variant,is_error): (_,_,_,_,String,_,String,_,_,_,String,bool)= result?;
    // let node = Node{part, parent, variant, is_error};
    // results.push(node);
    // }

    let results: Vec<Node> = RangeDeserializerBuilder::new()
        .from_range(&range)?
        .map(|row| {
            let (level, path, _, _, part, _, _, _, _, _, variant, is_error):(u8, String, String, String, String, String, String, String, String, String, String, bool) = row.unwrap_or_default();
            Node {
                level,
                part,
                variant,
                is_error,
                is_affected: false,
                path
            }
        })
        .collect();
    //println!("aa {:?}", results);
    let node_parser = results.clone();
    let mut results = Assembly{parts: results}; 
    for node in node_parser {
        if (node.is_affected) {
            continue;
        }
        if (node.is_error) {

        }
    }
    Ok(())
}

