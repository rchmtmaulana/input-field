import '@style/diarypost.css'

export default function DiaryPost({params}) {
    const {judul, isi} = params;

    return (
        <div className='diary-post-container'>
            <h1>{decodeURIComponent(judul)}</h1>
            <p>{decodeURIComponent(isi)}</p>
        </div>
    );
}
