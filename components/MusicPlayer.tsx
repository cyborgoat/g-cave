import {Card, CardBody, Button, Image, Progress, CardProps} from "@nextui-org/react";
import {useState, FC} from "react";
import {clsx} from "@nextui-org/shared-utils";
import HeartIcon from "@components/icon/HeartIcon";
import PreviousIcon from "@components/icon/PreviousIcon";
import PlayAndPauseIcon from "@components/icon/PlayAndPauseIcon";
import NextSongIcon from "@components/icon/NextSongIcon";
import RepeatIcon from "@components/icon/RepeatIcon";
import useSound from "use-sound";
import {MusicInfo} from "../types/music";
import process from "process";

export interface MusicPlayerProps extends CardProps {
}

export const MusicPlayer: FC<MusicPlayerProps> = ({className, ...otherProps}) => {
    const PUBLIC_ASSETS_URL = process.env.NEXT_PUBLIC_ASSETS_URL
    const [liked, setLiked] = useState(false);
    let music: MusicInfo = {
        title: 'Night Owl',
        musicUrl: `${PUBLIC_ASSETS_URL}/music/fools.mp3`,
        albumUrl: `${PUBLIC_ASSETS_URL}/music/NightOwl.jpeg`,
    }

    return (
        <Card
            isBlurred
            className={clsx("border-none bg-background/60 dark:bg-default-100/50", className)}
            shadow="sm"
            {...otherProps}
        >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                        <Image
                            alt="Album cover"
                            className="object-cover"
                            height={200}
                            shadow="lg"
                            src={music.albumUrl}
                            width="100%"
                        />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                                <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                                <p className="text-sm text-foreground/80">0 Tracks</p>
                                <h1 className="text-lg font-medium mt-2">{music.title}</h1>
                            </div>
                            <Button
                                isIconOnly
                                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                                radius="full"
                                variant="light"
                                onPress={() => setLiked((v) => !v)}
                            >
                                <HeartIcon/>
                            </Button>
                        </div>
                        <audio
                            controls
                        >
                            <source src={music.musicUrl} type={"audio/mp3"}/>
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>

                        {/*<div className="flex flex-col mt-3 gap-1">*/}
                        {/*    <Progress*/}
                        {/*        aria-label="Music progress"*/}
                        {/*        classNames={{*/}
                        {/*            indicator: "bg-default-800 dark:bg-white",*/}
                        {/*            track: "bg-default-500/30",*/}
                        {/*        }}*/}
                        {/*        color="default"*/}
                        {/*        size="sm"*/}
                        {/*        value={33}*/}
                        {/*    />*/}
                        {/*    <div className="flex justify-between">*/}
                        {/*        <p className="text-sm">1:23</p>*/}
                        {/*        <p className="text-sm text-foreground/50">4:32</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="flex w-full items-center justify-center">*/}
                        {/*    <Button*/}
                        {/*        isIconOnly*/}
                        {/*        className="data-[hover]:bg-foreground/10"*/}
                        {/*        radius="full"*/}
                        {/*        variant="light"*/}
                        {/*    >*/}
                        {/*        <RepeatIcon/>*/}
                        {/*    </Button>*/}
                        {/*    <Button*/}
                        {/*        isIconOnly*/}
                        {/*        className="data-[hover]:bg-foreground/10"*/}
                        {/*        radius="full"*/}
                        {/*        variant="light"*/}
                        {/*    >*/}
                        {/*        <PreviousIcon/>*/}
                        {/*    </Button>*/}
                        {/*    <Button*/}
                        {/*        isIconOnly*/}
                        {/*        className="w-auto h-auto data-[hover]:bg-foreground/10"*/}
                        {/*        radius="full"*/}
                        {/*        variant="light"*/}
                        {/*    >*/}
                        {/*        <PlayAndPauseIcon/>*/}
                        {/*    </Button>*/}
                        {/*    <Button*/}
                        {/*        isIconOnly*/}
                        {/*        className="data-[hover]:bg-foreground/10"*/}
                        {/*        radius="full"*/}
                        {/*        variant="light"*/}
                        {/*    >*/}
                        {/*        <NextSongIcon/>*/}
                        {/*    </Button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};
