import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Modal } from "../components/Modal"
import { ImageItem } from "../components/ImageItem"
import { photoList } from "../data/photoList"
import { useState } from 'react'
import { ButtonScrollToTop } from "../components/ButtonToTop"

export const PhotoGallery = () => {

    const [imageFull, setImageFull] = useState('');
    const [showGallery, setShowGallery] = useState(true);
    const [showModal, setShowModal] = useState(false);



    const getIdImage = (id: number) => {
        const photo = photoList.find(item => item.id === id);
        if (photo) {
            setImageFull(photo.url);
            setShowGallery(false);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowGallery(true);
        setShowModal(false);
    }

    return (
        <>
            <ButtonScrollToTop />
            <Header />

            {showGallery &&
                <section className="container mx-auto grid grid-cols-1 gap-8 px-10 py-10 md:grid-cols-2 lg:grid-cols-3">
                    {photoList.map(item => (
                        <ImageItem
                            key={item.id}
                            photoItem={item}
                            onClick={() => getIdImage(item.id)}
                        />
                    ))}
                </section>
            }

            {showModal &&
                <section>
                    <Modal
                        imageGallery={imageFull}
                        onClick={closeModal}

                    />
                </section>
            }
            <Footer />
        </>
    )
}