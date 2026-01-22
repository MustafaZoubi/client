export default function Footer() {
    return (
        <footer className="bg-black text-white py-3">
            <div className="container d-flex justify-content-center align-items-center gap-2">

                <span>
                    © {new Date().getFullYear()} Arcadia. All rights reserved.
                </span>

            </div>
        </footer>
    );
}
