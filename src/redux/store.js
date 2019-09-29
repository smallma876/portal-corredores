import { createStore } from 'redux';
import REQUEST_ACTIONS from './../constants/actions/requestactions';

const requestPoliza = {
    requestSearcher : {
       arrayRamos : [],
       arrayState: [],
       arraySituation: [],
       criterio:"",
       valueCriterio:""
    }
  }

const reducer = (state, action) => {
    console.log("en el reducer");
    if(action.type === REQUEST_ACTIONS.SEARCHER_POLIZA){
        const { name, value} = action.request;
        let valor;
        if(action.request.type ==="checkbox"){
            if(action.request.checked){
                valor = [...state.requestSearcher[name], action.request.getAttribute("data-value")];
            }else{
                valor = state.requestSearcher[name].filter( m => m !== action.request.getAttribute("data-value"));
            }
        }else{
            valor = value;
        }
        let requestSearcher = { ...state.requestSearcher, [name]: valor};
        return   {
            ...state,
            requestSearcher
        };
       
    }
    return state;
};

export default createStore(reducer,requestPoliza);