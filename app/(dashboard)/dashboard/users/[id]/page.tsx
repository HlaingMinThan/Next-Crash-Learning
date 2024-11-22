export default function UserId({params} : { params : {id : string}}) {
    const {id} = params;
    console.log('id is '+id)
    return (
      <div>users - {id}</div>
    )
  }
  