#![no_std]

use soroban_sdk::{contract, contractimpl, Env, Symbol};

#[contract]
pub struct EzPayContract;

#[contractimpl]
impl EzPayContract {
    pub fn ping(env: Env) -> Symbol {
        Symbol::new(&env, "pong")
    }
}
