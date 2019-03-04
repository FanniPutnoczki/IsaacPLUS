int temp;
int pin = 1;

void setup() {
  Serial.begin(9600);
}

void loop() {
  delay(1500);
  temp = analogRead(pin);
  float celsius = ((temp/1024.0)*5000)/10.0; 
  Serial.println(celsius);
}
