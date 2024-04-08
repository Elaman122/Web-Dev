from django.core.management.base import BaseCommand
from faker import Faker
from api.models import Company, Vacancy

fake = Faker()

class Command(BaseCommand):
    help = 'Generates 7 fake companies and 9 related vacancies'

    def handle(self, *args, **kwargs):
        for _ in range(7):  # Создаем 7 фейковых компаний
            company = Company.objects.create(
                name=fake.company(),
                description=fake.text(),
                city=fake.city(),
                address=fake.address()
            )
            for _ in range(3):  # Создаем по 3 связанные вакансии для каждой компании
                Vacancy.objects.create(
                    name=fake.job(),
                    description=fake.text(),
                    salary=fake.random_int(min=30000, max=100000),  # Случайная зарплата от 30k до 100k
                    company=company
                )
        self.stdout.write(self.style.SUCCESS('Fake data created successfully'))
