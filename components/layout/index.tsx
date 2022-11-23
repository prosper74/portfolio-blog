import Head from 'next/head'
// import Image from 'next/image'

export function Header() {
	return (
		<main>
			<div className='text-3xl text-green-600 p-2'>
				Header section
			</div>
		</main>
	)
}

export function Footer() {
	return (
		<main>
			<div className='text-3xl text-green-600 p-2'>
				Footer section
			</div>
		</main>
	)
}

export default function Layout({ children }: any) {
	return (
		<div className='px-4 py-2'>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
