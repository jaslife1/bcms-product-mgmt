# BCMS Product Management

This contains the product management front-end.

# System application versions
Node version: 18.14.1 (Hydrogen)
React-Router version: 6.8.1

# Running the front end

    yarn start

If an error is encountered when running yarn like the one below:

    <--- JS stacktrace --->

    FATAL ERROR: wasm code commit Allocation failed - process out of memory
    1: 0x1047b59d8 node::Abort() [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    2: 0x1047b5b58 node::errors::TryCatchScope::~TryCatchScope() [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    3: 0x1048cf330 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    4: 0x1048cf2c4 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    5: 0x104e64cbc v8::internal::wasm::WasmCodeAllocator::AllocateForCodeInRegion(v8::internal::wasm::NativeModule*, unsigned long, v8::base::AddressRegion, v8::internal::wasm::WasmCodeAllocator::OptionalLock const&) [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    6: 0x104e65950 v8::internal::wasm::NativeModule::CreateEmptyJumpTableInRegion(int, v8::base::AddressRegion, v8::internal::wasm::WasmCodeAllocator::OptionalLock const&) [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    7: 0x104e64618 v8::internal::wasm::NativeModule::AddCodeSpace(v8::base::AddressRegion, v8::internal::wasm::WasmCodeAllocator::OptionalLock const&) [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    8: 0x104e65760 v8::internal::wasm::NativeModule::NativeModule(v8::internal::wasm::WasmEngine*, v8::internal::wasm::WasmFeatures const&, v8::internal::VirtualMemory, std::__1::shared_ptr<v8::internal::wasm::WasmModule const>, std::__1::shared_ptr<v8::internal::Counters>, std::__1::shared_ptr<v8::internal::wasm::NativeModule>*) [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    9: 0x104e67cd4 v8::internal::wasm::WasmCodeManager::NewNativeModule(v8::internal::wasm::WasmEngine*, v8::internal::Isolate*, v8::internal::wasm::WasmFeatures const&, unsigned long, std::__1::shared_ptr<v8::internal::wasm::WasmModule const>) [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    10: 0x104e737e8 v8::internal::wasm::WasmEngine::NewNativeModule(v8::internal::Isolate*, v8::internal::wasm::WasmFeatures const&, std::__1::shared_ptr<v8::internal::wasm::WasmModule const>, unsigned long) [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    11: 0x104e40110 v8::internal::wasm::CompileToNativeModule(v8::internal::Isolate*, v8::internal::wasm::WasmFeatures const&, v8::internal::wasm::ErrorThrower*, std::__1::shared_ptr<v8::internal::wasm::WasmModule const>, v8::internal::wasm::ModuleWireBytes const&, v8::internal::Handle<v8::internal::FixedArray>*) [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    12: 0x104e7063c v8::internal::wasm::WasmEngine::SyncCompile(v8::internal::Isolate*, v8::internal::wasm::WasmFeatures const&, v8::internal::wasm::ErrorThrower*, v8::internal::wasm::ModuleWireBytes const&) [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    13: 0x104e97344 v8::(anonymous namespace)::WebAssemblyModule(v8::FunctionCallbackInfo<v8::Value> const&) [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    14: 0x104938040 v8::internal::FunctionCallbackArguments::Call(v8::internal::CallHandlerInfo) [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    15: 0x1049373a4 v8::internal::MaybeHandle<v8::internal::Object> v8::internal::(anonymous namespace)::HandleApiCallHelper<true>(v8::internal::Isolate*, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::HeapObject>, v8::internal::Handle<v8::internal::FunctionTemplateInfo>, v8::internal::Handle<v8::internal::Object>, v8::internal::BuiltinArguments) [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    16: 0x104936ea0 v8::internal::Builtin_Impl_HandleApiCall(v8::internal::BuiltinArguments, v8::internal::Isolate*) [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    17: 0x10504cfcc Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_BuiltinExit [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    18: 0x104fe177c Builtins_JSBuiltinsConstructStub [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    19: 0x1050c9f0c Builtins_ConstructHandler [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]
    20: 0x104fe5c34 Builtins_InterpreterEntryTrampoline [/Users/buhayjason/.nvm/versions/node/v14.16.1/bin/node]

Check the node version and make sure that you are using at least 18.14.1. Follow instructions below to update the nvm version.

# Running the relay-compiler

When processing the GraphQL query so that they will be compiled, we run the relay compiler as below.

    yarn run relay

Note though that __relay__ is part of the scripts that is added in our __package.json__

# Updating the Node version
## Check Node version
    node --version

## Check the NVM version
    nvm ls-remote

This will list all the available version and what is installed and currently used by the system
## Install version
    nvm install <version>
## Change version
    nvm use <version>

# UI Framework
Uses Material UI from https://mui.com/


# Reference

Currently used reference for relay: https://www.howtographql.com/react-relay/0-introduction/
