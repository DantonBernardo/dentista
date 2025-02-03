export default function CardServices(props){
  return(
    <div className='cardservices' id={props.key}>
      <img src={props.imgUrl} alt={props.alt}/>
      <p>{props.name}</p>
    </div>
  );
};