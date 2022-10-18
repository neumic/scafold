export function replaceSingletonFunction(singleton: object, mock: any) {
    Reflect.set(singleton, "INSTANCE", mock);
}

export function resetSingleton(singleton: object) {
    Reflect.set(singleton, "INSTANCE", null);
}

export function makeFileList(...files: File[]): FileList {
    const dataTransfer = new DataTransfer();
    files.forEach(file => {
        dataTransfer.items.add(file);
    });
    return dataTransfer.files;
}