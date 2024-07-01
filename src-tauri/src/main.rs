// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{Builder, State};

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn get_app_dirs() -> String {
    format!("Just trying another dir")
}

// https://crates.io/crates/aes-gcm
fn main() {
    Builder::default()
        .plugin(tauri_plugin_sql::Builder::default().build())
        .setup(|app| {
            // https://docs.rs/tauri/latest/tauri/struct.PathResolver.html#method.app_local_data_dir
            let path = app.path_resolver();
            let config_dir = path.app_config_dir();
            let data_dir = path.app_data_dir();
            let log_dir = path.app_log_dir();
            let local_data_dir = path.app_local_data_dir();
            let cache_dir = path.app_cache_dir();

            println!("Path: {:?}", data_dir);

            // pick the user info?

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet, get_app_dirs])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
