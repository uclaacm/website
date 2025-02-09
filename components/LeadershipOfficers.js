import Image from 'next/legacy/image';

function Officer(props) {
  return (
    <div className="officer-grid-row">
      <div className="officer-grid-col">
        <Image
          className="officer-image"
          src={props.officer.image}
          alt={props.officer.name}
          width={70}
          height={70}
        />
      </div>
      <div className="officer-grid-col officer-info">
        <h3 className="officer-title">{props.officer.name}</h3>
        <p>{props.officer.title}</p>
      </div>
    </div>
  );
}

function Officers(props) {
  return (
    // TODO: more flexible mobile views
    (<div className="grid-desktop-3">
      {props.officers.map((officer) => (
        <Officer officer={officer} key={officer.image} />
      ))}
    </div>)
  );
}

export default Officers;
