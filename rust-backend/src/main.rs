use calamine::*;

const PATH: &str = "C:\\Users\\bookw\\Downloads\\QRV Bill of Materials.xlsx";
fn main() -> Result<(), Error> {
    let mut workbook: Xlsx<_> = open_workbook(PATH)?;
    let range = workbook.worksheet_range("raw")?;
    let mut results = Vec::new();

    let mut iter = RangeDeserializerBuilder::new().from_range(&range)?;

    while let Some(result) = iter.next() {
        let (_,_,_,_,part,_,parent,_,_,_,variant,is_error): = result?;
        results.push(hei);
    }

    println!("aa {:?}", results);
    Ok(())
}
