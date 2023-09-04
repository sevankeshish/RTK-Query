import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useContactQuery, useContactsQuery } from "./services/contactsApi";

function App() {
  const { data, error, isFetching, isLoading, isSuccess } = useContactsQuery();
  return (
    <div className="App">
      <h1>React redux toolkit RTQ Query</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {error && <h2>something went wrong</h2>}
      {isSuccess && (
        <div>
          {data?.map((contact: any) => {
            return (
              <div key={contact.id}>
                <span>{contact.name}</span>
                <span>
                  <ContactDetail id={contact.id} />
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export const ContactDetail = ({ id }: { id: string }) => {
  const { data } = useContactQuery(id);
  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};

export default App;
