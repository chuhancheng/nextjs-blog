import Link from "next/link"
import Head from "next/head"
import Layout from '../../components/layout'

export async function getServerSideProps(context) {
    console.log('YOOO');
    return {
        props: {
            mydata: 123
        }
    }
}

export default function FirstPost({mydata}) {
    return (
        <Layout home={false}>
            <Head>
                <title>First Post: ({mydata})</title>
            </Head>
            <h1>First Post</h1>
        </Layout>
    )
}
