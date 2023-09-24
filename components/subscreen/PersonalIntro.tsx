import ChevronDown from "@components/icon/CheveronDown";

export default function PersonalIntro() {
    return (
        <div className="grid grid-cols-3 w-screen justify-start items-center">
            <div className="col-span-1">
                <h1 className="text-5xl font-semibold gradient-text">I am a...</h1>
            </div>
            <div className="col-span-2 mx-auto">
                <ChevronDown/>
            </div>

        </div>
    )
}