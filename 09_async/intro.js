// javascript->
            // Synchronus
            // Single Threaded   
                                    // Default 

// Execution context
            // -execute one line of code at a time 
            // -each operation waits for the last one to complete before executing


// Blocking code  vs  Non Blocking Code 
//  Blocking code and Non Blocking Code depends on usecases
//Blocking code-
// block the flow of program 
// Read File Sync 

//Non Blocking Code -
// Does not block execution
// Read File Async 

//                                       EVENT LOOP
// 
// |-------------------------------------|                            WEB API
// |                                     |          |--------------------------------------|
// |     MEMORY HEAP    | CALL STACK |   |          |   DOM API                            |
// |     |---------|    |------------|   |          |  SET TIMEOUT------------|            |
// |     |         |    |    fn      |   |          | SET INTERVAL      register call back |
// |     |---------|    |      fn    |   |          |  fetch()--                |          |
// |                    | global     |   |          |           |               |          |
// |                    |------------|   |          |           |promise        |          |
// |                          |    |high priority   |   |-----------------|     |          |
// |                          |     -----|----------|---|  | CB|  |CB|    |     |          |
// |--------------------------|----------|          |   |-----------------|     |          |
//                            |                      ---------------------------|----------|
//                            |                 ---------------------           |          
//                            |---------------- |      |CB|  |CB|    |----------|         
//                add to call stack             |--------------------|
//                                                task Queue