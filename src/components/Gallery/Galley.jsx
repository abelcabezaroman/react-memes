import Card from "../Card/Card";

export default function Gallery({list}){
    return <div className="row">
        {list.map(item => <div key={item.id} className="col-12 col-md-6 col-lg-4 col-xl-3"><Card  data={item}/></div>)}
    </div>
}