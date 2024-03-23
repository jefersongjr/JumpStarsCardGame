import { 
    Card, 
    Text,
    CardBody, 
    CardFooter, 
    Image, 
    Stack, 
    Divider, 
    Heading, 
    ButtonGroup, 
    Button 
 } from '@chakra-ui/react'

function Cards ({ nome, descricao, forca, agilidade, inteligencia, defesa, imagem, corFundo, anime }) {
  return (
<Card maxW='sm' backgroundColor={ corFundo } >
  <CardBody >
    <Image
      src={ imagem }
      alt={ nome }
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{ nome }</Heading>
      <Text>
        { descricao }
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        Anime: { anime }
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='red'>
        Força: { forca }
      </Button>
      <Button variant='solid' colorScheme='green'>
        Agilidade: { agilidade }
      </Button>
      <Button variant='solid' colorScheme='blue'>
        Inteligência: { inteligencia }
      </Button>
      <Button variant='solid' colorScheme='blue'>
        Defesa: { defesa }
      </Button>

    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default Cards
