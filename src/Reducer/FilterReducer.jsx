const filterReducer = (state,action)=>{
    switch(action.type){
        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,
                filter_products:[...action.payload],
                all_products:[...action.payload]
            };
            case "GET_SORT_VALUE":
                let userSortValue = document.getElementById("sort");
                let sort_value= userSortValue.options[userSortValue.selectedIndex].value;
                console.log(sort_value);
                return{
                    ...state,
                    sortingValue:sort_value,
                }

            case "SORTING_PRODUCTS":
                let newSortData;
                let tempSortProduct = [...action.payload]
                
                if( state.sortingValue === "lowest" ){
                   const sortingProducts = (a,b)=>{
                    return a.price - b.price;
                   }
                   newSortData = tempSortProduct.sort(sortingProducts)
                }
                if( state.sortingValue === "highest" ){
                   const sortingProducts = (a,b)=>{
                    return b.price - a.price;
                   }
                   newSortData = tempSortProduct.sort(sortingProducts)
                }

                if( state.sortingValue === "a-z" ){
                    newSortData = tempSortProduct.sort((a,b)=>
                     a.name.localeCompare(b.name)
                    );
                }
                if( state.sortingValue === "z-a" ){
                    newSortData = tempSortProduct.sort((a,b)=>
                     b.name.localeCompare(a.name)
                    );
                }
                return{
                    ...state,
                    filter_products:newSortData,
                }
            default:
                return state
    }
}

export default filterReducer;