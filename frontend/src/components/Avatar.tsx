const Avatar = ({name}: {name: string}) => {
    return(
        <div>
            <div className={`inline-flex items-center justify-center h-7 w-7 bg-gray-100 rounded-full dark:bg-gray-600 ring-2`}>
                <span className="p-2 font-sm text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}</span>
            </div>
        </div>
    )
}
export default Avatar