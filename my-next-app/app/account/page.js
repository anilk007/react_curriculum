import addAccount from "../actions/AccountAction"

export default function page() {
    return (
        <>

            <h1>Add Account Form</h1>

            <form action={addAccount}>

                <label htmlFor="userName">User Name</label>
                <input type="text" id="userName" name="userName"></input>
                
                <label htmlFor="email">email</label>
                <input type="text" id="email" name="email"></input>

                <label htmlFor="age">age</label>
                <input type="text" id="age" name="age"></input>

                
                <input type="submit" value="Submit" />



            </form>
        </>
    );

}