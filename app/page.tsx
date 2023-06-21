import Link from "next/link";
import * as path from "path";

export default async function Home() {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'data','test.md');
    console.log(jsonDirectory)
    // //Read the json data file data.json
    const content = await fetch(jsonDirectory)
    // console.log(content)
    return (
        <div className={"bg-gray-600 text-slate-200"}>
            This is me
        </div>
    );
}
