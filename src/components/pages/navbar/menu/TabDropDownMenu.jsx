import {Popover, Transition} from "@headlessui/react";
import {DropDownButton} from "../../../ui/navbar/buttons";
import React, {Fragment} from "react";
import classNames from "../../../../business-logic/css-utils";
import {Link} from "react-router-dom";
import {logout} from "../../../../business-logic/near/contract";

export const TabsDropDownMenu = ({name, tabs, isProfile}) => {
    return (
        <Popover className="relative">
            {({isOpen}) => (
                <div key={name}>
                    <DropDownButton isOpen={isOpen} tabName={name}/>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel
                            className={classNames(
                                isProfile ? '-ml-20' : '-ml-4',
                                "absolute z-10 -ml-4 mt-3 transform px-2"
                            )}>
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    {tabs.map(({path, name}) => (
                                        name === "Sign out"
                                            ? <Link to='/' key={name} onClick={logout}>
                                                <div className={classNames(
                                                    name === "Launchpad" ? 'cursor-not-allowed' : 'cursor-pointer',
                                                    "text-medium font-medium text-gray-500 hover:text-gray-900"
                                                )}>
                                                    {name}
                                                </div>
                                            </Link>
                                            : <Link key={name} to={path}>
                                                <div
                                                    className="cursor-pointer -m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                                                >
                                                    <p className="text-medium font-medium text-gray-900">{name}</p>
                                                </div>
                                            </Link>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </div>
            )}
        </Popover>
    )
}