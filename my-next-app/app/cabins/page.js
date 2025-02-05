import Counter from "../../components/counter/Counter"

export default async function page() {



    const resp = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await resp.json();

    console.log("API Response data:", data);


    return (

        <div>
            <h1> cabins ...</h1>

            <ul>
                {
                    data.map((user) => (

                        <li key={user.id}>{user.name}</li>
                    )

                    )
                }


            </ul>

            <Counter users={data}/>
        </div>


    );
}