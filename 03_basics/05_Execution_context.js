    // JAVASCRIPT EXECUTION CONTEXT 

    // Global E.C 
                //|-> 'this' me global E.C ko rakh diya jata hai aur browser me this ki value window object aati hai
            // i> -> Global Execution Context 
            // ii> ->Function Execution Context
            // iii> -> Eval Exectuion Context


            // MEMORY CREATION PHASE (or CREATION PHASE)-> memory allocate
            // EXECUTION PHASE -> execute the variable/ whatever you have written



 //HOW CODE EXECUTE---------

    // let val1 =10
    // let val2=5
    // function addNum(num1,num2){
    //     let total = num1+num2
    //     return total
    // }
    // let result1 = addNum(val1,val2)
    // let result2 = addNum(10,2)

    //Phase 1> Global Execution -> this 

    //Phase 2> Memory Phase - FIRST CYCLE
                    // val1->undefined
                    // val2->undefined
                    // addNum->definition
                    // result1->undefined
                    // result2->undefined

    //Phase 3> Execution Phase - SECOND CYCLE
                    // val1->10
                    // val2->5
                    // addNum->[[[newVariable Environment + Execution thread]]] //-> ye jo global execution context bna hai  , too ye delete bhi hota hai after completing
                                        //         ||
                                        //         ||
                                        //         ||
                                 // Memory phase    and     execution phase  
                                //         ||                      ||
                                //     val1->undefined          num1->10
                                //     val2->undefined          num2->5
                                //     total->undefined         total->15 // return it into global execution context

                    // SAME STORY REPEAT AGAIN---------------------------


//CALL STACK->

// |---------------|  // LIFO order
// |   Three()     |
// |---------------|
// |   Two()       |
// |---------------|
// |   one()       |
// |---------------|
// |GlobalExecution|
// |---------------|