import prismadb from '@/lib/prismadb'
import React from 'react'
import CompanionForm from './components/CompanionForm'
import { auth, redirectToSignIn } from '@clerk/nextjs'

interface CompanionIdPageProps {
    params: {
        companionId: string
    }
}

const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
    const { userId } = auth()
    // TODO: Check Subscription

    if(!userId) {
        return redirectToSignIn()
    }

    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.companionId,
            userId
        }
    })

    const categories = await prismadb.category.findMany()

    return (
        <CompanionForm initialData={companion} categories={categories} />
    )
}

export default CompanionIdPage