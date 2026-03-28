import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта Krishidzen на email ruslan399885@gmail.com"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    message = body.get('message', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    gmail_user = 'ruslan399885@gmail.com'
    gmail_password = os.environ['GMAIL_APP_PASSWORD']
    to_email = 'ruslan399885@gmail.com'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта Krishidzen от {name}'
    msg['From'] = gmail_user
    msg['To'] = to_email

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1E1A17; color: #fff; padding: 32px; border-radius: 12px;">
      <div style="background: #F05A00; padding: 4px 0; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="margin: 12px 0; color: #fff; font-size: 20px; letter-spacing: 2px;">KRISHIDZEN</h1>
      </div>
      <div style="padding: 24px 0;">
        <h2 style="color: #F05A00; margin-bottom: 20px;">Новая заявка с сайта</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #999; width: 120px;">Имя:</td>
            <td style="padding: 10px 0; color: #fff; font-weight: bold;">{name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #999;">Телефон:</td>
            <td style="padding: 10px 0; color: #F05A00; font-weight: bold; font-size: 18px;">{phone}</td>
          </tr>
          {"<tr><td style='padding: 10px 0; color: #999; vertical-align: top;'>Сообщение:</td><td style='padding: 10px 0; color: #fff;'>" + message + "</td></tr>" if message else ""}
        </table>
      </div>
      <div style="border-top: 1px solid #2A2420; padding-top: 16px; color: #666; font-size: 12px;">
        Заявка отправлена с сайта Krishidzen
      </div>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(gmail_user, gmail_password)
        server.sendmail(gmail_user, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }
