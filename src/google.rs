#[allow(unused_imports)]
use dotenv::dotenv;
use reqwest;
use std::error::Error;
static TARGET: &str = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=";
pub async fn params() -> Vec<String> {
    dotenv().ok();
    let api_key = std::env::var("GOOGLE_API_KEY").expect("GOOGLE_API_KEY must be set");
    let link = format!("{}{}", TARGET, api_key);
    let body = reqwest::get(link).await.unwrap().text().await;
    println!("Response: {:?}", body);
    return vec![api_key];
}
