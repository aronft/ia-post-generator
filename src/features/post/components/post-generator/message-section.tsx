import { Controller, useFormContext } from 'react-hook-form'

export const MessageSection = () => {
    const { watch, control } = useFormContext()

    const message = watch('message')
    return (
        <div>
            <div className="flex justify-between items-center ">
                <label
                    htmlFor="post-masseg"
                    className="text-2xl font-medium mb-4"
                >
                    Your message
                </label>
                <span className="text-gray-400">
                    {message?.length ?? 0}/200
                </span>
            </div>
            <Controller
                control={control}
                rules={{
                    required: {
                        message: 'The message is required',
                        value: true,
                    },
                }}
                name="message"
                render={({
                    field: { onChange, onBlur, value },
                    fieldState,
                }) => {
                    const hasError = !!fieldState.error?.message
                    const isInvalid = fieldState.invalid
                    let borderColor = 'border-gray-300'

                    if (hasError) {
                        borderColor = 'border-red-400'
                    }

                    if (!isInvalid && message?.length > 0) {
                        borderColor = 'border-green-400'
                    }

                    return (
                        <>
                            <textarea
                                className={`border border-gray-300  rounded-md w-full p-3 ${borderColor}`}
                                id="post-masseg"
                                cols={30}
                                rows={5}
                                placeholder="e.g How to scape tutorial hell"
                                value={value}
                                onBlur={onBlur}
                                onChange={(e) => {
                                    if (e.target.value.length > 200) {
                                        return
                                    }
                                    onChange(e)
                                }}
                            ></textarea>
                            {fieldState.error?.message && (
                                <p className="text-red-400 text-sm">
                                    {fieldState.error?.message}
                                </p>
                            )}
                        </>
                    )
                }}
            />
        </div>
    )
}
