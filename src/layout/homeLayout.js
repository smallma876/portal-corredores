import React, { Component } from 'react';
import ButtonAppBar from './../components/menubar';

export default class HomeLayout extends Component{

   render (){
    const styleSectionPage = {
        width : '1170px',
        margin: '0 auto',
        marginTop: '25px'
    }

       return (
           <div>
               <header>
                    <ButtonAppBar/>
               </header>
               <section>
                    <div style={ styleSectionPage}>
                        {this.props.children}       
                    </div>            
               </section>
               <footer>

               </footer>
           </div>
       );
   }
    

}