# Generated by Django 4.1.13 on 2024-06-29 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0003_itemimage'),
    ]

    operations = [
        migrations.AddField(
            model_name='items',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
        migrations.DeleteModel(
            name='ItemImage',
        ),
    ]
