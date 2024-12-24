
import'./App.css'

function Form(){
  return(
    <form>
    <label for="linkName">Link Name</label>
  <input type="text" name="linkName"/>

  <br/>

  <label for="linkURL">Link URL</label>
  <input type="text" name="linkURL"/>

  <br/>
  <br/>

  <input type="submit" />


</form>
  )

}

function Table(){

  return(
    <table>
    <tr>
      <th>Link Name</th>
      <th>Link URL</th>
    </tr>
  </table>

  )
 
 

}


function App(){

  return(
   
   <div>
    <h1 className="testClass">Submit your fav links!</h1>

    <Form />

    <Table />

    
  

   </div>
   
  
  )

  


}

export default App
