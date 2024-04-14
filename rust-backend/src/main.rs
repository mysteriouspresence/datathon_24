use calamine::*;

#[derive(Debug)]
struct Node {
    part: String,
    parent: String,
    variant: String,
    is_error: bool,
}

const PATH: &str = "C:\\Users\\bookw\\Downloads\\QRV Bill of Materials.xlsx";
fn main() -> Result<(), Error> {
    let mut workbook: Xlsx<_> = open_workbook(PATH)?;
    let range = workbook.worksheet_range("raw")?;
    let mut results:Vec<Node> = Vec::new();

    let mut iter = RangeDeserializerBuilder::new().from_range(&range)?;

    while let Some(result) = iter.next() {
        let (_,_,_,_,part,_,parent,_,_,_,variant,is_error): (_,_,_,_,String,_,String,_,_,_,String,bool)= result?;
        let node = Node{part, parent, variant, is_error};
        results.push(node);
    }

    println!("aa {:?}", results);
    Ok(())
}
