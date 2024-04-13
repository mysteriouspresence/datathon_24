
#[allow(unused_imports)]
use dotenv::dotenv;
use reqwest;
use std::error::Error;
static TARGET: &str = "https://businesscoder.melissadata.net/WEB/BusinessCoder/doBusinessCoderUS?id=";
pub async fn params() -> Vec<String> {
    dotenv().ok();
    let api_key = std::env::var("MELISSA_API_KEY").expect("MELISSA_API_KEY must be set");
    let link = format!("{}{}", TARGET, api_key);
    let body = reqwest::get(link).await.unwrap().text().await;
    println!("Response: {:?}", body);
    return vec![api_key];
}
