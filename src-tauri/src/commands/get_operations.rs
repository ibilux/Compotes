use std::ops::Deref;
use rusqlite::Connection;
use std::sync::Mutex;
use tauri::State;
use crate::entities::operations;

#[tauri::command]
pub(crate) fn get_operations(conn_state: State<'_, Mutex<Connection>>) -> String {
    let conn = conn_state.inner().lock().expect("Could not retrieve database connection");
    let conn = conn.deref();

    serde_json::to_string(&operations::find_all(&conn)).expect("Could not serialize Operations properly")
}
