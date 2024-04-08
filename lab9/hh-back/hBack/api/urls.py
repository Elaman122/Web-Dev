from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.all_companies, name='List of all Companies'),
    path('companies/<int:company_id>/', views.company, name='Get one Company'),
    path('companies/<int:company_id>/vacancies/', views.vacancies_by_company, name='List of Vacancies by Company'),
    path('vacancies/', views.all_vacancies, name='List of all Vacancies'),
    path('vacancies/<int:vacancy_id>/', views.vacancy, name='Get one Vacancy'),
    path('vacancies/top_ten/', views.sorted_vacancies, name='List of top 10 vacancies sorted by decreasing salary'),
]
