export default function getClass(index) {
    if(index % 5 === 0) {
        return 'big';
    }
    else if(index % 7 === 0) {
        return 'wide';
    }
    else {
        return '';
    }
}