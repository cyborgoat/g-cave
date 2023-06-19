'use client';
import {usePathname} from 'next/navigation';
import {Fragment} from 'react';

export default function BreadCrumbs() {
    var pathName: string = usePathname() ?? "";
    const pathList: string[] = decodeURI(pathName).split('/').slice(1,2);

    return (
        <Fragment>
            <div className="flex justify-center text-sm breadcrumbs dark:text-gray-200">
                <ul>
                    <li><a href='/'>Home</a></li>
                    {pathList.map((path, pathIdx) => <li key={pathIdx}><a href={'/' + pathList.slice(0, pathIdx + 1).join('/')} className='capitalize'>{path}</a></li>)}
                </ul>
            </div>
        </Fragment>
    )
}