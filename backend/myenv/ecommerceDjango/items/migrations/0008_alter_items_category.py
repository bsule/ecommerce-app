# Generated by Django 4.1.13 on 2024-07-02 04:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0007_alter_items_review_avg_alter_items_total_reviews'),
    ]

    operations = [
        migrations.AlterField(
            model_name='items',
            name='category',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='items.category'),
            preserve_default=False,
        ),
    ]