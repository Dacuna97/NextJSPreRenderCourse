function UserIdPage({ id }) {
  return <h1>{id}</h1>;
}
export default UserIdPage;

export async function getServerSideProps(context) {
  const { params } = context;

  const id = params.uid;

  return {
    props: {
      id
    }
  };
}
