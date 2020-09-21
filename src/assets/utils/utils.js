export function swapElementsInArray(arr, a, b) {
    const tempItemA = arr[a];
    arr[a] = arr[b];
    arr[b] = tempItemA;
    return arr.map(item => item);
}

export function copyToClipboard(str) {
    const el = document.createElement('input');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'fixed';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
