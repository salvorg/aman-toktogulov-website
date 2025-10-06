import Container from '@/components/Container';

export default function AboutPage() {
    return (
        <Container>
            <div className="py-12">
                <h1 className="text-4xl font-serif mb-6 border-b-2 border-tolkien-accent pb-2">Обо мне</h1>
                <div className="prose prose-lg max-w-none">
                    <p>
                        Здесь будет подробный текст о вас, ваших навыках и опыте.
                        Помните, стиль Tolkien Estate — это **чистый, удобочитаемый текст** на светлом фоне. Используйте теги для структуры.
                    </p>
                        {/* ... остальной контент ... */}
                </div>
            </div>
        </Container>
);
}