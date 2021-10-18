<template>
    <div>
        <h1 ref="myref">This is hook Vue</h1>
        <p>{{name}}</p>
        <p>{{name}}</p>
    </div>
</template>

<script>


export default ({
    //data is a local memory of this template
   data(){
       return{

           name:'usman waheed'
       }
   },

   //beforecrated will undefine because it will run before html loaded
   beforeCreated(){

       console.log("this will created before script and HTML");

   },



   //crated will undefine because it will run before html loaded
   created(){

       console.log(this.$refs.myref);
       console.log(this.name);
   },


   //mounted will run after html and js loadec

   mounted(){
       console.log(this.$refs.myref);

   }
})
</script>
