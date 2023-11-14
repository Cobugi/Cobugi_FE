import MyPageBorrow from "./MyPageBorrow";
import myinfo from "./myinfo.json";

export default function List() {
    return (
        <>
        {myinfo.map((my) => (
        //   <MyPageBorrow {...my} />
        <div>{my.id}</div>
        ))}
        </>
      );
}
