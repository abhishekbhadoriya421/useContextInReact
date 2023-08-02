import GrandChildComponent from './GrandChildComponent';
export default function ChildComponent(){
    return(<>
        <div className="Box"
                style={{
                    width:'300px',
                    height:'200px',
                    border:"3px solid black",
                    display:'flex',
                    justifyContent: 'center',
                    alignItems:'center',
                    margin:'auto'
                }}
        >
            <GrandChildComponent/>
        </div>
    </>)
}