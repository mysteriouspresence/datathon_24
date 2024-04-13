
#[allow(unused_imports)]
use dotenv::dotenv;
use reqwest;
use std::error::Error;
static TARGET: &str = "MelissaAPILINK";
async fn params() -> Vec<String> {
    dotenv().ok();
    let api_key = std::env::var("MELISSA_API_KEY").expect("MELISSA_API_KEY must be set");
    return vec![api_key];
}
