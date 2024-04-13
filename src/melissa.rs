
#[allow(unused_imports)]
use dotenv::dotenv;
use reqwest;
use std::error::Error;
static TARGET: &str = "https://businesscoder.melissadata.net/WEB/BusinessCoder/doBusinessCoderUS?idJ3xzwBYgVfflfnpUlIwQVo**&city=Irvine&state=CA";
pub async fn params() -> Vec<String> {
    dotenv().ok();
    //let api_key = std::env::var("MELISSA_API_KEY").expect("MELISSA_API_KEY must be set");
    let body = reqwest::get(TARGET).await.unwrap().text().await.unwrap();
    println!("Response: {:?}", body);
    return vec!["ur".to_string(), "mom".to_string()];
}
