
import useToggle from './../hooks/useToggle'

function ToggleModal() {
    const [isModalOpen, toggleModal] = useToggle();
    return (
        <div>
            <div>
                <button onClick={toggleModal}>Toggle Modal</button>
                {isModalOpen && <p>Modal Content</p>}
            </div>
        </div>
    )
}

export default ToggleModal


